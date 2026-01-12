'use client';

import React, { useRef, useState, useCallback, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface FileUploadProps {
    accept?: string;
    multiple?: boolean;
    maxSize?: number; // in bytes
    maxFiles?: number;
    onUpload?: (files: File[]) => void;
    onError?: (error: string) => void;
    disabled?: boolean;
    children?: ReactNode;
    className?: string;
}

export function FileUpload({
    accept,
    multiple = false,
    maxSize = 10 * 1024 * 1024, // 10MB default
    maxFiles = 10,
    onUpload,
    onError,
    disabled = false,
    children,
    className,
}: FileUploadProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<File[]>([]);

    const validateFiles = useCallback((fileList: FileList | File[]) => {
        const validFiles: File[] = [];
        const errors: string[] = [];

        const filesToCheck = Array.from(fileList);

        if (filesToCheck.length > maxFiles) {
            errors.push(`Maximum ${maxFiles} files allowed`);
            return { validFiles: [], errors };
        }

        for (const file of filesToCheck) {
            if (maxSize && file.size > maxSize) {
                errors.push(`${file.name} exceeds maximum size of ${formatBytes(maxSize)}`);
                continue;
            }

            if (accept) {
                const acceptedTypes = accept.split(',').map(t => t.trim());
                const isAccepted = acceptedTypes.some(type => {
                    if (type.startsWith('.')) {
                        return file.name.toLowerCase().endsWith(type.toLowerCase());
                    }
                    if (type.endsWith('/*')) {
                        return file.type.startsWith(type.replace('/*', '/'));
                    }
                    return file.type === type;
                });

                if (!isAccepted) {
                    errors.push(`${file.name} is not an accepted file type`);
                    continue;
                }
            }

            validFiles.push(file);
        }

        return { validFiles, errors };
    }, [accept, maxSize, maxFiles]);

    const handleFiles = useCallback((fileList: FileList | null) => {
        if (!fileList || disabled) return;

        const { validFiles, errors } = validateFiles(fileList);

        if (errors.length > 0) {
            onError?.(errors.join(', '));
        }

        if (validFiles.length > 0) {
            setFiles(validFiles);
            onUpload?.(validFiles);
        }
    }, [disabled, validateFiles, onError, onUpload]);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        if (!disabled) setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
    };

    const handleClick = () => {
        if (!disabled) inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFiles(e.target.files);
    };

    const removeFile = (index: number) => {
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        onUpload?.(newFiles);
    };

    return (
        <div className={cn('x-file-upload', className)}>
            <div
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={cn(
                    'x-file-upload-zone relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all',
                    'hover:border-indigo-500 hover:bg-indigo-500/5',
                    isDragging && 'border-indigo-500 bg-indigo-500/10',
                    !isDragging && 'border-[var(--x-border)]',
                    disabled && 'opacity-50 cursor-not-allowed'
                )}
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    onChange={handleChange}
                    disabled={disabled}
                    className="hidden"
                />

                {children || (
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[var(--x-muted)] flex items-center justify-center">
                            <svg className="w-6 h-6 text-[var(--x-mutedForeground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-[var(--x-foreground)]">
                                Drop files here or click to upload
                            </p>
                            <p className="text-xs text-[var(--x-mutedForeground)] mt-1">
                                {accept ? `Accepted: ${accept}` : 'Any file type'} • Max {formatBytes(maxSize)}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* File list */}
            {files.length > 0 && (
                <div className="x-file-upload-list mt-4 space-y-2">
                    {files.map((file, index) => (
                        <div
                            key={`${file.name}-${index}`}
                            className="flex items-center justify-between p-3 rounded-lg bg-[var(--x-muted)]"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="w-8 h-8 rounded bg-[var(--x-card)] flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[var(--x-mutedForeground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-[var(--x-foreground)] truncate">{file.name}</p>
                                    <p className="text-xs text-[var(--x-mutedForeground)]">{formatBytes(file.size)}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFile(index)}
                                className="text-[var(--x-mutedForeground)] hover:text-red-500 transition-colors p-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}
