'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

type CrawlMode = 'shallow' | 'standard' | 'deep';

export default function UrlForm() {
  const [url, setUrl] = useState('');
  const [chatName, setChatName] = useState('');
  const [mode, setMode] = useState<CrawlMode>('standard');

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-6 w-full max-w-lg mx-auto p-6 bg-white rounded-2xl shadow"
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
        <p className="text-xs text-gray-500">
          Nên dán trang nội dung (ví dụ bài viết) thay vì homepage để có dữ liệu liên quan tốt hơn.
        </p>
      </div>

      {/* Crawl presets (depth) */}
      <div className="flex flex-col gap-3">
        <Label>Chế độ crawl</Label>
        <RadioGroup
          value={mode}
          onValueChange={(v) => setMode(v as CrawlMode)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          <label
            className={cn(
              'border rounded-xl p-3 cursor-pointer hover:bg-gray-50',
              mode === 'shallow' && 'ring-2 ring-primary/60'
            )}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="shallow" id="mode-shallow" />
              <span className="font-medium">Shallow</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Chỉ trang hiện tại</p>
          </label>

          <label
            className={cn(
              'border rounded-xl p-3 cursor-pointer hover:bg-gray-50',
              mode === 'standard' && 'ring-2 ring-primary/60'
            )}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="standard" id="mode-standard" />
              <span className="font-medium">Standard</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Cẩn trọng</p>
          </label>

          <label
            className={cn(
              'border rounded-xl p-3 cursor-pointer hover:bg-gray-50',
              mode === 'deep' && 'ring-2 ring-primary/60'
            )}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="deep" id="mode-deep" />
              <span className="font-medium">Deep</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Chuyên sâu</p>
          </label>
        </RadioGroup>
      </div>

      {/* Submit */}
      <Button type="submit">Bắt đầu crawl</Button>
    </form>
  );
}
