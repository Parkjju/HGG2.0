from multiprocessing.sharedctypes import Value
import jwt
from django.conf import settings
from rest_framework import authentication
from rest_framework import exceptions
from members.models import Member

class JWTAuthentication(authentication.BaseAuthentication):
  def authenticate(self, request):
    try:
      token = request.META.get("HTTP_AUTHORIZATION")
      if token is None:
        return None
      xjwt, jwt_token = token.split(" ")
      decoded = jwt.decode(jwt_token, settings.SECRET_KEY, algorithms=["HS256"])
      pk = decoded.get("pk")
      member = Member.objects.get(pk=pk)
      return (member, None)
    except ValueError: # token이 제대로 보내지지 않은 경우
      return None
    except jwt.exceptions.DecodeError: # 잘못된 token을 가지고 decode하는 경우
      raise exceptions.AuthenticationFailed(detail="JWT Format Invalid")
    except Member.DoesNotExist:
      return None