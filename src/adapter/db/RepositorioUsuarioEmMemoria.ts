import Usuario from '../../core/usuario/model/Usuario';

export default class RepositorioUsuarioEmMemoria {
  private static readonly itens: Usuario[] = [];

  async inserir(usuario: Usuario) {
    const itens = RepositorioUsuarioEmMemoria.itens;
    const usuarioExistente = await this.buscarPorEmail(
      usuario.email
    );
    if (usuarioExistente) return;
    itens.push(usuario);
  }

  async buscarPorEmail(
    email: string
  ): Promise<Usuario | null> {
    const itens = RepositorioUsuarioEmMemoria.itens;
    return itens.find((u) => u.email === email) ?? null;
  }
}
