const STATUS = {
  200: 'OK.',
  304: 'Not Modified, not necessarily bad.',
  400: 'Request not following the expected, adapt to the expected format and try again.',
  403: 'You must be logged in to view this page.',
  500: 'Something went wrong, please try again later.',
}

type TCode = keyof typeof STATUS

export const result = <T>(
  code: TCode,
  params?: { id?: string | null; data?: unknown[] },
): T => {
  const response = {
      status: {
          message: STATUS[code],
          code,
      },
      ...params,
  }

  return { ...(response as object) } as T
}
