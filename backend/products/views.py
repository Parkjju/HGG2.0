#rest_framework
from functools import partial
from itertools import product
from os import stat
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework import status
#in products dir
from .models import Product
from .serializers import ProductSerializer
#datetime
import datetime
from django.utils import timezone
from django.db.models import Q
# Create your views here.
class ProductsView(APIView):
    def get(self, request):
        paginator = PageNumberPagination()
        paginator.page_size = 10
        #검색기능
        search_query = request.GET.get("search", None)
        if(search_query != None):
            products = Product.objects.filter(
                Q(p_title__contains = search_query)|
                Q(p_content__contains = search_query)
            )
        else:
            products = Product.objects.all()
        results = paginator.paginate_queryset(products, request)
        serializer = ProductSerializer(results, many=True)
        return paginator.get_paginated_response(data=serializer.data)
    
    def post(self, request):
        if not request.user.is_authenticated: #인증된 유저인지 확인
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            product = serializer.save(member=request.user)
            product_serializer = ProductSerializer(product)
            return Response(data=product_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class ProductView(APIView):
    # 특정 상품 가져오는 함수
    def get_product(self, pk):
        try:
            product = Product.objects.get(pk=pk)
            serializer = ProductSerializer(product)
            return product
        except Product.DoesNotExist:
            return None
    #GET
    def get(self, request, pk):
        product = self.get_product(pk)
        if product is not None:
            #만료일 설정
            expires = datetime.datetime.replace(timezone.datetime.now(), hour=23, minute=59, second=0)
            str_expires = datetime.datetime.strftime(expires, "%a, %d-%b-%Y %H:%M:%S GMT")
            serializer = ProductSerializer(product)
            response = Response(data=serializer.data)
            #쿠키 읽기 & 생성
            if request.COOKIES.get('hit') is not None: #쿠키에 hit이 이미 있을 경우
                cookies = request.COOKIES.get('hit')
                cookies_list = cookies.split(',')
                if str(pk) not in cookies_list:
                    response.set_cookie('hit', cookies+f',{pk}', expires=str_expires)
                    product.p_cnt += 1
                    product.save()
            else:#쿠키에 hit 값이 없을 경우(즉, 현재 보는 상품이 첫 상품일 때)
                response.set_cookie('hit', pk, expires=expires)
                product.p_cnt += 1
                print("test")
                product.save()
            
            #조회수 업데이트 후 다시 생성
            serializer = ProductSerializer(product)
            response.data = serializer.data

            return response
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        product = self.get_product(pk)
        if product is not None:
            if product.member != request.user:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            product.delete()
            return Response()
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, pk):
        product = self.get_product(pk)
        if product is not None:
            if request.user != product.member:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            serializer = ProductSerializer(instance=product, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(data=product, status=status.HTTP_200_OK)
            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

class AscendPriceView(APIView):
    def get(self, request):
        paginator = PageNumberPagination()
        paginator.page_size = 10
        products = Product.objects.all().order_by("p_price", "-p_updated")
        results = paginator.paginate_queryset(products, request)
        serializer = ProductSerializer(results, many=True)
        return paginator.get_paginated_response(data=serializer.data)

class DescendPriceView(APIView):
    def get(self, request):
        paginator = PageNumberPagination()
        paginator.page_size = 10
        products = Product.objects.all().order_by("-p_price", "-p_updated")
        results = paginator.paginate_queryset(products, request)
        serializer = ProductSerializer(results, many=True)
        return paginator.get_paginated_response(data=serializer.data)