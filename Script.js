// Array para armazenar consultas agendadas
const consultasAgendadas = [];

// Função para mostrar o formulário de agendamento
function showAgendaForm() {
    document.getElementById('agendaForm').style.display = 'block';
    document.getElementById('consultas').style.display = 'none';
}

// Função para mostrar a lista de consultas
function showConsultas() {
    document.getElementById('agendaForm').style.display = 'none';
    document.getElementById('consultas').style.display = 'block';
}

// Função para agendar a consulta
document.getElementById('agendamentoForm').onsubmit = function(event) {
    event.preventDefault(); // Evitar o envio do formulário

    // Obter os dados do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const motivo = document.getElementById('motivo').value;

    // Criar um objeto de consulta
    const consulta = {
        nome: nome,
        idade: idade,
        motivo: motivo,
        data: new Date().toLocaleString() // Data da consulta
    };

    // Armazenar a consulta no array
    consultasAgendadas.push(consulta);
    
    // Limpar o formulário
    document.getElementById('agendamentoForm').reset();
    alert('Consulta agendada com sucesso!');
};

// Função para verificar a senha e mostrar as consultas agendadas
function verConsultas() {
    const senha = document.getElementById('senhaConsultas').value;
    if (senha === '223344') {
        const listaConsultas = document.getElementById('listaConsultas');
        listaConsultas.innerHTML = ''; // Limpar lista anterior

        consultasAgendadas.forEach(consulta => {
            const li = document.createElement('li');
            li.textContent = `Nome: ${consulta.nome}, Idade: ${consulta.idade}, Motivo: ${consulta.motivo}, Data: ${consulta.data}`;
            listaConsultas.appendChild(li);
        });

        document.getElementById('consultaList').style.display = 'block';
    } else {
        alert('Senha incorreta!');
    }
                            }
