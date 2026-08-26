

# Register your models here.
from django.contrib import admin
from .models import ComprehensiveService

@admin.register(ComprehensiveService)
class ComprehensiveServiceAdmin(admin.ModelAdmin):
    list_display = ('step_number', 'title', 'thumbnail_preview')
    search_fields = ('title', 'step_number')
    ordering = ('step_number',)
    list_per_page = 20

    def thumbnail_preview(self, obj):
        if obj.image:
            return f'<img src="{obj.image.url}" style="width: 50px; height: 30px; object-fit: cover; border-radius: 4px;" />'
        return "No Image"
    thumbnail_preview.allow_tags = True
    thumbnail_preview.short_description = 'Image Preview'