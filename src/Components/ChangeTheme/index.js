import { useTheme } from '../../hooks/useTheme'
import '../../styles/ChangeTheme.css'

const ChangeTheme = () =>
{
  const { color, changeThemeColor } = useTheme();

  const themeColors = ['#58249c', '#249c6b', '#b70233'];

  const handleChangeTheme = themeColor => color !== themeColor && changeThemeColor(themeColor);
  return (
    <div className="icons-con">
        <i className='bx bx-moon'></i>
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
//  onClick={e => handleChangeNavBg(e)}
export default ChangeTheme