import { fetchGithubUser } from './githuApi.js';
import { renderProfile } from './profileView.js';


const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResult = document.querySelector('.profile-result');


btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.trim();
    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        profileResult.innerHTML = "";
        return;
    }
    profileResult.innerHTML = `<p class="loading">Carregando...</p>`;
    try {
        const userData = await fetchGithubUser(userName);
        renderProfile(userData, profileResult);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        profileResult.innerHTML = "";
    }
});
