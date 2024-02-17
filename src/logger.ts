class Logger {
  info(msg: string) {
    console.info(`[Info]: `, msg);
  }

  error(e: Error) {
    console.error(`[Error]: `, e);
  }
}

export {
  Logger
}
