export const cookieConsentConfig = {
  current_lang: 'pt',
  page_scripts: true, // default: false
  languages: {
    pt: {
      consent_modal: {
        title: 'Cookies',
        description: 'Nosso site guarda estatísticas de visitas para melhorar sua experiência de navegação, saiba mais em nossa <button type="button" data-cc="c-settings" class="cc-link">Politica de Privacidade</button>',
        primary_btn: {
          text: 'Aceitar e Continuar',
          role: 'accept_all',
        },
      },
      settings_modal: {
        title: 'Preferências de Cookies',
        save_settings_btn: 'Salvar',
        accept_all_btn: 'Aceitar',
        reject_all_btn: 'Rejeitar',
        close_btn_label: 'Fechar',
        cookie_table_headers: [],
        blocks: [],
      },
    },
  },
};
