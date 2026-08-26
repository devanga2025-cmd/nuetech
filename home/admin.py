from django.contrib import admin

from .models import NewsUpdate, SolutionCard


@admin.register(SolutionCard)
class SolutionCardAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title', 'description')


@admin.register(NewsUpdate)
class NewsUpdateAdmin(admin.ModelAdmin):
    list_display = ('title', 'date')
    search_fields = ('title', 'excerpt')
    list_filter = ('date',)
