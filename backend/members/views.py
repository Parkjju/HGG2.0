import jwt
from django.conf import settings
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.decorators import action
from .serializers import MemberSerializer
from .permissions import IsSelf
from .models import Member

class MemberViewSet(ModelViewSet):
  
  queryset = Member.objects.all()
  serializer_class = MemberSerializer

  # 접근 제한
  def get_permissions(self):
    permission_classes = []
    if self.action == "list": # get
      permission_classes = [IsAdminUser]
    elif self.action == "create" or self.action == "retrieve": # create, get/<int:pk>
      permission_classes = [AllowAny]
    else: # update(put/patch), delete
      permission_classes = [IsSelf]
    return [permission() for permission in permission_classes]

  @action(detail=False, methods=['POST'])
  def login(self, request):
    username = request.data.get("username")
    password = request.data.get('password')
    if not username or not password:
      return Response(status=status.HTTP_400_BAD_REQUEST)
    member = authenticate(username=username, password=password)
    # jwt token 생성
    if member is not None:
      encoded_jwt = jwt.encode({"pk":member.pk}, settings.SECRET_KEY, algorithm="HS256")
      return Response(data={"token":encoded_jwt, "id":member.pk})
    else:
      return Response(status=status.HTTP_401_UNAUTHORIZED)
