type Profile = {
  email: string;
  name: string;
  picture: string;
  sub: string;
};
export const useProfile = () => {
  // Поиск всех ключей в sessionStorage, которые соответствуют паттерну oidc.user
  const keys = Object.keys(window.sessionStorage).filter(
    key => key.startsWith('oidc.user:') && key.includes('accounts.google.com')
  );

  if (keys.length > 0) {
    const storedData = sessionStorage.getItem(keys[0]);
    const data = JSON.parse(storedData);

    if (data && data.profile) {
      return data.profile as Profile;
    }
  }

  return null;
};
