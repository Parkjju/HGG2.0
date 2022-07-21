from rest_framework import serializers
from .models import Member

# Member관련 Serializer
class MemberSerializer(serializers.ModelSerializer):
  
  password = serializers.CharField(write_only=True)

  class Meta:
    model = Member
    fields = (
      "id",
      "username",
      "m_email",
      "m_pic",
      "m_intro",
      "m_buy",
      "m_level",
      "m_rdate",
      "m_drop",
      "m_address",
      "m_phone",
      "m_post",
      "password", # pw가 validated_data에 나타나기 위해 설정
    )
    read_only_fields = ("m_pic",)

  # for test
  def validate_first_name(self, value):
    return value.upper()

  # create Member
  def create(self, validated_data):
    print(validated_data)
    password = validated_data.get('password')
    member = super().create(validated_data)
    member.set_password(password)
    member.save()
    return member

  
