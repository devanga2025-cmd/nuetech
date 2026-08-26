

# Register your models here.
from django.contrib import admin
from .models import FounderVision, FeaturedProject

@admin.register(FounderVision)
class FounderVisionAdmin(admin.ModelAdmin):
    list_display = ('heading_prefix', 'heading_highlight', 'quote_author')
    search_fields = ('heading_prefix', 'heading_highlight', 'quote_author')

@admin.register(FeaturedProject)
class FeaturedProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'location', 'capacity', 'year')
    list_filter = ('category', 'year')
    search_fields = ('title', 'location')
    list_per_page = 20