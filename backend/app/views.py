from django.contrib.auth import login
from django.shortcuts import render, redirect
from .forms import RegistrationForm

def registration_view(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/')  # Redirecione para a página inicial após o registro
    else:
        form = RegistrationForm()

    return render(request, 'register.html', {'form': form})
