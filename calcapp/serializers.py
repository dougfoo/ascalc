from .models import Bundle, Resource
from rest_framework import serializers

class ResourceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Resource
        fields = ['resource_name', 'role','title']

class BundleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bundle
#        resources = ResourceSerializer(read_only=True, many=True)
        fields = ['bundle_name', 'size', 'months', 'resources']
        depth = 2   # expand the resources block

