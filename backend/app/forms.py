from django import forms
from .models import Perfil  

class RegistrationForm(forms.ModelForm):
    class Meta:
        model = Perfil
        fields = ('nomePerfil','username', 'email', 'password')
