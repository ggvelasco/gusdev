// @ts-expect-error arquivo em JSX
import StaggeredMenu from './StaggeredMenu';
const menuItems = [
    { label: 'Home', ariaLabel: 'Ir para o início', link: '#' },
    { label: 'About', ariaLabel: 'Sobre mim', link: '#about-section' },
    { label: 'Services', ariaLabel: 'Serviços', link: '#services-section' },
    { label: 'Projects', ariaLabel: 'Projetos', link: '#myprojects-section' },
];

const socialItems = [
    { label: 'GitHub', link: 'https://github.com/ggvelasco' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/ggvelasco' },
];

export default function Navbar() {
    const handleOpen = () => document.body.classList.add('menu-open');
    const handleClose = () => document.body.classList.remove('menu-open');

    return (
        <StaggeredMenu
            isFixed={true}
            position="left"
            logoUrl="/logo.svg"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={true}
            menuButtonColor="#eeeeee"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={['#1a0533', '#5227FF']}
            accentColor="#8306fc"
            onMenuOpen={handleOpen}
            onMenuClose={handleClose}
        />
    );
}