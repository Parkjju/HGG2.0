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
# Create your views here.
class ProductsView(APIView):
    def get(self, request):
        paginator = PageNumberPagination()
        paginator.page_size = 10
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
            serializer = ProductSerializer(product)
            return Response(data=serializer.data)
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