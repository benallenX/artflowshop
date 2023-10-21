import React from 'react'
import { ConfigProvider } from 'antd'

const ThemedProviders = ({ children }: { children: React.ReactNode }) => {
    return (
    <div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#000',
                    },
                }}
            >
            {children}
        </ConfigProvider>
    
    </div>
  )
}

export default ThemedProviders
