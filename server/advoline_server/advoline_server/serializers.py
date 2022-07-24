from rest_framework import serializers

from .models import AdvolineDB


class AdvolineDBSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvolineDB
        fields = ['id', 'first_name', 'last_name', 'story', 'LawyerType','title', 'content', 'image']
