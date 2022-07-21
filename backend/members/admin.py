from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models

@admin.register(models.Member)
class MemberAdmin(UserAdmin):

  fieldsets = UserAdmin.fieldsets + (
    ("Custom Profile", 
    {"fields": (
      "m_email",
      "m_pic", 
      "m_intro",
      "m_buy",
      "m_level",
      "m_drop",
      "m_address",
      "m_phone",
      "m_post")},),
  )

  list_display = ('id', 'username', "m_email", "m_level")