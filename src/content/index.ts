import barbearia from "./barbearia.json";
import banhoECozinha from "./banho-e-cozinha.json";
import canalizacao from "./canalizacao.json";
import home from "./home.json";
import reformas from "./reformas.json";
import salaoBeleza from "./salao-beleza.json";
import saude from "./saude.json";
import barbeariaImages from "./images/barbearia.json";
import banhoECozinhaImages from "./images/banho-e-cozinha.json";
import canalizacaoImages from "./images/canalizacao.json";
import reformasImages from "./images/reformas.json";
import salaoBelezaImages from "./images/salao-beleza.json";
import saudeImages from "./images/saude.json";

export const content = {
  home,
  barbearia,
  salaoBeleza,
  reformas,
  banhoECozinha,
  canalizacao,
  saude,
  images: {
    barbeariaImages,
    salaoBelezaImages,
    reformasImages,
    banhoECozinhaImages,
    canalizacaoImages,
    saudeImages,
  },
} as const;

export type SiteContent = typeof content;
