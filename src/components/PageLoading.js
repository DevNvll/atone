import React from 'react'
import { Progress } from 'reactstrap'

const PageLoading = ({ loading = false }) => {
  return loading ? (
    <Progress
      style={{
        position: 'absolute',
        top: '0',
        width: '100%',
        borderRadius: '0'
      }}
      animated
      value={100}
    />
  ) : null
}

export default PageLoading
