from django.contrib.auth.models import AbstractUser
from django.db import models

class Member(AbstractUser):
  id = models.AutoField(primary_key=True, verbose_name="m_id")
  username = models.CharField(max_length=10, unique=True, verbose_name="m_name")
  m_email = models.EmailField(unique=True)
  m_pic = models.ImageField(upload_to="profile_pic", blank=True)
  m_intro = models.CharField(max_length=140, null=True)
  m_buy = models.IntegerField(default=0)
  m_level = models.IntegerField(default=1)
  m_rdate = models.DateField(auto_now_add=True)
  m_drop = models.IntegerField(default=0)
  m_address = models.CharField(max_length=140, null=True)
  m_phone = models.CharField(max_length=20, null=True)
  m_post = models.CharField(max_length=10, null=True)

  # USERNAME_FIELD = 'm_name'