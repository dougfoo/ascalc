from .models import Bundle, Resource, Project, Membership
from rest_framework import serializers

class ResourceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Resource
        fields = ['role', 'perdiem','title']

class MembershipSerializer(serializers.HyperlinkedModelSerializer):
    role = serializers.ReadOnlyField(source='resource.role')
    title = serializers.ReadOnlyField(source='resource.title')
    perdiem = serializers.ReadOnlyField(source='resource.perdiem')

    class Meta:
        model = Membership
        fields = ['role','title','perdiem','allocation']

class BundleSerializer(serializers.HyperlinkedModelSerializer):
    members = MembershipSerializer(source='membership_set', many=True)

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

class PlistSerializer(serializers.HyperlinkedModelSerializer):
    members = MembershipSerializer(source='bundle.membership_set', many=True)
    bundle = serializers.ReadOnlyField(source='bundle.name')
    months = serializers.ReadOnlyField(source='bundle.months')
#    role = serializers.ReadOnlyField(source='bundle.members')

    class Meta:
        model = Project
        fields = ['name', 'start_date', 'bundle', 'months','members']
