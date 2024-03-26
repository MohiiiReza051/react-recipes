import { useTheme } from '../../hooks/useTheme'
import '../../styles/ChangeTheme.css'
import modeIcon from '../../assets/mode-icon.svg'

const ChangeTheme = () =>
{
  const { color, changeThemeColor, mode, changeMode } = useTheme();

  const themeColors = ['#58249c', '#249c6b', '#b70233'];
  const handleChangeMode = () => changeMode(mode === 'light' ? 'dark' : 'light'); 
  const handleChangeTheme = themeColor => color !== themeColor && changeThemeColor(themeColor);

  return (
    <div className="icons-con">
        <img
          className='moon'
          src={modeIcon}
          alt="mode-icon"
          style={{ filter: mode === 'light' ? 'invert(0%)' : 'invert(100%)' }}
          onClick={handleChangeMode}
        />
        <div className="solid-circles">
          {themeColors.map(tc => (
            <div
              key={tc}
              style={{ backgroundColor: tc }}
              onClick={() => handleChangeTheme(tc)}>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ChangeTheme