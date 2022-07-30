from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

app_name = "members"

router = DefaultRouter()
router.register("", views.MemberViewSet)
urlpatterns = router.urls