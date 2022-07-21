from django.urls import path
from . import views

app_name = "members"

urlpatterns = [
  path("", views.MembersView.as_view()),
  path("me/", views.MeView.as_view()),
  path("<int:pk>/", views.member_detail),
]