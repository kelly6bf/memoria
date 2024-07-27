package site.kelly.memoria.common.controller.error;

import static org.springframework.http.HttpStatus.*;

import org.springframework.http.HttpStatus;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public enum CommonApiError {

    SERVER_ERROR(INTERNAL_SERVER_ERROR, "서버에 예기치 못한 문제가 발생하였습니다."),
    NOT_FOUND_ERROR(NOT_FOUND, "존재하지 않는 리소스입니다.");

    private final HttpStatus httpStatus;
    private final String message;
}
