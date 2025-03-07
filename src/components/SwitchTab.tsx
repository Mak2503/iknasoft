import clsx from 'clsx'
import React from 'react'

const SwitchTab = () => {
  const [tab, setTab] = React.useState("rent")

  const handleTab = (tab: string) => {
    setTab(tab)
  }

  const tabStyle = (selectedTab: string) => clsx(tab === selectedTab && 'bg-[#2E96C6] text-white', "py-4 px-8 rounded-lg")

  return (
    <div className='bg-[#F1F1F3] p-1 rounded-xl hidden lg:flex items-center cursor-pointer'>
      <div className={tabStyle('buy')} onClick={() => handleTab('buy')}>Buy</div>
      <div className={tabStyle('rent')} onClick={() => handleTab('rent')}>Rent</div>
    </div>
  )
}

export default SwitchTab