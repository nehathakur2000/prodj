from django.contrib import admin
from .models import Member
# Register your models here.
class newadd(admin.ModelAdmin):
    list_display=("id","name")
admin.site.register(Member,newadd)
