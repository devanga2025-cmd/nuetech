

# Register your models here.
from django.contrib import admin
from .models import ProductCard

@admin.register(ProductCard)
class ProductCardAdmin(admin.ModelAdmin):
    list_display = ('title', 'short_description')  # Show title, description, and link
    search_fields = ('title', 'short_description')
    list_per_page = 20
    
    # Optional: A nice preview helper for the admin list
    def short_description_preview(self, obj):
        return obj.short_description[:50] + '...' if len(obj.short_description) > 50 else obj.short_description
    short_description_preview.short_description = "Short Description"
