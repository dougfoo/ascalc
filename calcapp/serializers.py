from .models import Bundle, Resource
from rest_framework import serializers

class ResourceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Resource
        fields = ['role', 'perdiem','title']

class BundleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bundle
#        resources = ResourceSerializer(read_only=True, many=True)
        fields = ['name', 'size', 'months', 'members']
        depth = 2   # expand the resources block

