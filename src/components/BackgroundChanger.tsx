import { ChangeEvent } from 'react'

export default function BackgroundChanger() {
  function handlerBackgroundRbOnChange(e: ChangeEvent<HTMLInputElement>) {
    const selectedColor = e.target.value;
    if(selectedColor === 'default') {
      document.documentElement.style.setProperty('background-color', '#242424');
      return;
    }

    document.documentElement.style.setProperty('background-color', selectedColor);
  }
  return (
    <div>
      <div>
        <input
          type='radio'
          id='rbDefaultBgColor'
          name='radioBg'
          value='default'
          onChange={handlerBackgroundRbOnChange}
          style={{marginRight: '8px'}}
        />
        <label htmlFor='rbDefaultBgColor'>Default Background Color</label>
      </div>
      <div>
        <input
          type='radio'
          id='rbAquaBgColor'
          name='radioBg'
          value='aqua'
          onChange={handlerBackgroundRbOnChange}
          style={{marginRight: '8px'}}
        />
        <label htmlFor='rbAquaBgColor'>Aqua Background Color</label>
      </div>
      <div>
        <input
          type='radio'
          id='rbDarkRedBgColor'
          name='radioBg'
          value='darkred'
          onChange={handlerBackgroundRbOnChange}
          style={{marginRight: '8px'}}
        />
        <label htmlFor='rbDarkRedBgColor'>Dark Red Background Color</label>
      </div>
      <div>
        <input
          type='radio'
          id='rbDeepPinkBgColor'
          name='radioBg'
          value='deeppink'
          onChange={handlerBackgroundRbOnChange}
          style={{marginRight: '8px'}}
        />
        <label htmlFor='rbDeepPinkBgColor'>Deep Pink Background Color</label>
      </div>
    </div>
  )
}
