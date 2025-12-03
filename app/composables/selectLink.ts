// /app/utils/useNavigation.ts
export const useNavigation = () => {
  const router = useRouter();
  const menuOpen = ref(false);

  const links = ref([
    { name: "HOME", path: "/", selected: false },
    { name: "PROGETTI", path: "/progetti", selected: false },
    { name: "BIO", path: "/bio", selected: false },
    { name: "CONTATTI", path: "/contatti", selected: false },
  ]);

  const selectLink = (name: string) => {
    menuOpen.value = false;
    links.value.forEach((link) => (link.selected = link.name === name));
    const selected = links.value.find((l) => l.name === name);
    if (selected) router.push(selected.path);
  };

  return { links, menuOpen, selectLink };
};