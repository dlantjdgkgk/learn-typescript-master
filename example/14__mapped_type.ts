type Heroes = 'Hulk' | 'Thor' | 'Capt';
type HeroProfiles = { [K in Heroes]: number };
const heroInfo: HeroProfiles = {
    Hulk: 54,
    Thor: 1000,
    Capt: 33,
};
