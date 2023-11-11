from django.db import models
from django.contrib.auth.models import AbstractUser

class Perfil(AbstractUser):
    nomePerfil = models.CharField(max_length=20,help_text='Nome que aparecerá no perfil')
    foto_perfil = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    biografia = models.TextField(max_length=500, blank=True)
    class Meta:
        verbose_name="Perfil"
        verbose_name_plural="Perfis"

class Post(models.Model):
    usuario = models.ForeignKey(Perfil, on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='posts',help_text="Imagem do post")
    legenda = models.TextField(help_text='Legenda',blank=True)
    postadoEm = models.DateTimeField(auto_now_add=True)  
    class Meta:
        verbose_name="Post"
        verbose_name_plural="Post's"

    def __str__(self):
        return self.legenda
    
class LikePost(models.Model):
    post = models.ForeignKey(Post,on_delete=models.CASCADE, related_name='postlike')
    user = models.OneToOneField(Perfil, on_delete=models.CASCADE)

    def __str__(self):
        return  self.user.nomePerfil +" | "+ self.post.legenda
    