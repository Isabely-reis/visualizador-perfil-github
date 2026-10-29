import { fetchGithubUser, fetchGithubRepos } from './githuApi.js';
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
        const userRepos = await fetchGithubRepos(userName);
        console.log(userRepos);

       
       
        renderProfile(userData, userRepos, profileResult);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        profileResult.innerHTML = "";
    }
});

inputSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        btnSearch.click();
    }
});
