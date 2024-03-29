from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import PromoterCreationForm, PromoterChangeForm
from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model

Promoter = get_user_model()
class PromoterAdmin(UserAdmin):
    add_form = PromoterCreationForm
    form = PromoterChangeForm
    model = Promoter
    list_display = ["email", "username", 'id']
    
    
    # form = PromoterCreationForm
    # add_form = PromoterCreationForm
    # form = PromoterChangeForm
    # model = Promoter
    # list_display = ["email", "username", 'image']
    # list_display_links = ["username", 'email']
# admin.site.register(Promoter)

admin.site.register(Promoter, PromoterAdmin)
admin.site.unregister(Group)


admin.site.site_header = 'Sena Reasearch Admin Panel'
