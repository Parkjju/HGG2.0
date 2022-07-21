from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .serializers import MemberSerializer
from .models import Member

class MembersView(APIView):
  # create member
  def post(self, request):
    serializer = MemberSerializer(data=request.data) # deserializing(JSON->Dict자료형)
    if serializer.is_valid():
      new_member = serializer.save()
      return Response(MemberSerializer(new_member).data)
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MeView(APIView):
  permission_classes = [IsAuthenticated]
  # 내 정보 불러오기
  def get(self, request):
    return Response(MemberSerializer(request.user).data)

  # 내 정보 업데이트
  def put(self, request):
    serializer = MemberSerializer(request.user, data=request.data, partial=True)
    print(request.data)
    if serializer.is_valid():
      serializer.save()
      return Response()
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 유저 정보 확인
@api_view(["GET"])
def member_detail(request, pk):
  try:
    member = Member.objects.get(pk=pk)
    return Response(MemberSerializer(member).data)
  except Member.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
