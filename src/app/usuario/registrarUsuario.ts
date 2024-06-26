import Usuario from '@/core/usuario/model/Usuario';
import TerminalUtil from '../util/TerminalUtil';
import RegistrarUsuario from '@/core/usuario/service/RegistrarUsuario';
import SenhaCripto from '@/adapter/auth/SenhaCripto';
import RepositorioUsuarioEmMemoria from '@/adapter/db/RepositorioUsuarioEmMemoria';

export default async function registrarUsuario() {
  TerminalUtil.titulo('Registrar Usuário');

  const nome = await TerminalUtil.campoRequerido(
    'Nome: '
  );
  const email = await TerminalUtil.campoRequerido(
    'Email: '
  );
  const senha = await TerminalUtil.campoRequerido(
    'Senha: '
  );

  const usuario: Usuario = { nome, email, senha };

  const repositorio = new RepositorioUsuarioEmMemoria()
  const provedorCripto = new SenhaCripto()
  const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto)

  await casoDeUso.executar(usuario);

  TerminalUtil.sucesso('Usuário registrado com sucesso');
  await TerminalUtil.esperarEnter();
}
