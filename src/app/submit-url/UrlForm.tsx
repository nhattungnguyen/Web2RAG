'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function UrlForm() {
  const [url, setUrl] = useState('')
  const [chatName, setChatName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const res = await fetch('/api/start-job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, chatName }),
      })

      if (!res.ok) throw new Error('Request failed')

      const data = await res.json()
      setMessage(`✅ Job started: ${data.jobId || 'No ID returned'}`)
    } catch (err) {
      setMessage('❌ Failed to start job.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow"
    >
      {/* Chat name */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="chatName">Tên cuộc trò chuyện</Label>
        <Input
          id="chatName"
          placeholder="Ví dụ: Crawl website tin tức"
          value={chatName}
          onChange={(e) => setChatName(e.target.value)}
          required
        />
      </div>

      {/* URL input */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="url">URL Website</Label>
        <Input
          id="url"
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>

      {/* Submit button */}
      <Button type="submit" disabled={loading}>
        {loading ? 'Đang gửi...' : 'Bắt đầu crawl'}
      </Button>

      {/* Result message */}
      {message && (
        <p className="text-sm mt-2 text-gray-600">
          {message}
        </p>
      )}
    </form>
  )
}
