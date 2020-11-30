from .models import Bundle, Resource, Project
from rest_framework import serializers

class ResourceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Resource
        fields = ['role', 'perdiem','title']

class BundleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bundle
        fields = ['name', 'size', 'months', 'members']
        depth = 2   # expand the resources block

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    bundle = BundleSerializer()

    class Meta:
        model = Project
        fields = ['name', 'start_date', 'bundle']
        depth = 2   # expand the resources block

