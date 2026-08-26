

# Register your models here.
from django.contrib import admin
from .models import LatestNews, MediaGallery, FeaturedVideo

@admin.register(LatestNews)
class LatestNewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date', 'thumbnail_preview')
    list_filter = ('category', 'date')
    search_fields = ('title', 'description')
    ordering = ('-date',)
    list_per_page = 20

    # Helper to show a small thumbnail of the image in the list
    def thumbnail_preview(self, obj):
        if obj.image:
            return f'<img src="{obj.image.url}" style="width: 50px; height: 30px; object-fit: cover; border-radius: 4px;" />'
        return "No Image"
    thumbnail_preview.allow_tags = True
    thumbnail_preview.short_description = 'Image Preview'


@admin.register(MediaGallery)
class MediaGalleryAdmin(admin.ModelAdmin):
    list_display = ('id', 'is_secondary', 'sort_order', 'thumbnail_preview')
    list_filter = ('is_secondary',)
    list_editable = ('is_secondary', 'sort_order')  # Allows quick editing in the list view
    list_per_page = 20

    def thumbnail_preview(self, obj):
        if obj.image:
            return f'<img src="{obj.image.url}" style="width: 50px; height: 30px; object-fit: cover; border-radius: 4px;" />'
        return "No Image"
    thumbnail_preview.allow_tags = True
    thumbnail_preview.short_description = 'Image Preview'


@admin.register(FeaturedVideo)
class FeaturedVideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'duration', 'thumbnail_preview')
    search_fields = ('title',)
    list_per_page = 20

    def thumbnail_preview(self, obj):
        if obj.video_thumbnail:
            return f'<img src="{obj.video_thumbnail.url}" style="width: 50px; height: 30px; object-fit: cover; border-radius: 4px;" />'
        return "No Thumbnail"
    thumbnail_preview.allow_tags = True
    thumbnail_preview.short_description = 'Thumbnail Preview'