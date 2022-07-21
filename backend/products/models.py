from django.db import models

# Create your models here.
class Product(models.Model):
    p_id = models.AutoField(primary_key=True)
    member = models.ForeignKey(
        "members.Member", on_delete=models.CASCADE, related_name="products"
    )
    p_title = models.CharField(max_length=10, verbose_name="상품제목")
    p_content = models.TextField(verbose_name="상품설명")
    p_file_1 = models.ImageField(upload_to="product_pics", verbose_name="이미지1")
    p_file_2 = models.ImageField(upload_to="product_pics", verbose_name="이미지2", blank=True)
    p_file_3 = models.ImageField(upload_to="product_pics", verbose_name="이미지3", blank=True)
    p_created = models.DateTimeField(auto_now_add=True, verbose_name="상품작성일")
    p_updated = models.DateTimeField(auto_now=True, verbose_name="상품수정일")
    p_cnt = models.IntegerField(verbose_name="조회수")
    p_status = models.BooleanField(verbose_name="상품상태", default=False)
    p_price = models.IntegerField(verbose_name="상품가격")
    p_quantity = models.IntegerField(verbose_name="상품수량")
    p_ddate = models.DateTimeField(verbose_name="마감일")

    def __str__(self):
        return self.p_title