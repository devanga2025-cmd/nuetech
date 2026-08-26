from django.contrib import admin
from .models import JobOpportunity

@admin.register(JobOpportunity)
class JobOpportunityAdmin(admin.ModelAdmin):
    list_display = ('job_title', 'department', 'location', 'job_type', 'sort_order')
    list_editable = ('sort_order',)  # Allows you to reorder jobs directly in the list view
    search_fields = ('job_title', 'department', 'location')
    list_per_page = 20