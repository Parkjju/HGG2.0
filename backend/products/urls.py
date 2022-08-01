from django.urls import path
from .views import *

app_name = "products"

urlpatterns = [
    path("", ProductsView.as_view()),
    path("<int:pk>/", ProductView.as_view()),
    path("ascprice/", AscendPriceView.as_view()),
    path("desprice/", DescendPriceView.as_view()),
]