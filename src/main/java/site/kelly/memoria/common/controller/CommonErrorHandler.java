package site.kelly.memoria.common.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import lombok.extern.slf4j.Slf4j;
import site.kelly.memoria.common.controller.error.CommonApiError;
import site.kelly.memoria.common.controller.response.ApiErrorResponse;

@Slf4j
@RestControllerAdvice
public class CommonErrorHandler {

    @ExceptionHandler
    public ResponseEntity<ApiErrorResponse> handleNoResourceFoundException(final NoResourceFoundException e) {
        log.error(e.getMessage(), e);
        return ResponseEntity.status(CommonApiError.NOT_FOUND_ERROR.getHttpStatus())
                .body(new ApiErrorResponse(CommonApiError.NOT_FOUND_ERROR.getMessage()));
    }

    @ExceptionHandler
    public ResponseEntity<ApiErrorResponse> handleException(final Exception e) {
        log.error(e.getMessage(), e);
        return ResponseEntity.status(CommonApiError.SERVER_ERROR.getHttpStatus())
                .body(new ApiErrorResponse(CommonApiError.SERVER_ERROR.getMessage()));
    }
}
