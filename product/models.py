

# Create your models here.
from django.db import models

class ProductCard(models.Model):
    """Dynamic Model for 'Explore Our Products' cards"""
    
    # Basic Info
    title = models.CharField(max_length=100)
    short_description = models.TextField(max_length=250)
    image = models.ImageField(upload_to='products/')  # Requires Pillow library
    
    # Bullet Points (Features)
    # We use a text field with a separator, or a simple JSON field. 
    # For simplicity, a comma-separated string or a TextField with newlines is common.
    features = models.TextField(help_text="Enter features separated by a comma (e.g., High Efficiency, Durable, Long Warranty)")
    
    # Link for the button
    
    
    def get_features_list(self):
        """Helper method to split the features string into a list for the template"""
        return [feature.strip() for feature in self.features.split(',') if feature.strip()]

    def __str__(self):
        return self.title