import Carro from './Carro';

export default function corrida(
  carro: Carro,
  logger: (str: string) => void = console.log
) {
  Array.from({ length: 10 }).forEach(() => {
    carro.acelerar();
    logger(`\nVelocidaded: ${carro.velocidadeAtual}`);
  });

  Array.from({ length: 10 }).forEach(() => {
    carro.frear();
    logger(`\nVelocidaded: ${carro.velocidadeAtual}`);
  });
}
